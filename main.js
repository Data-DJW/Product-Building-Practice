/**
 * Modern Tetris Game
 * Implementation with Dark/Light mode support
 */

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const COLORS = {
    I: '#06b6d4',
    J: '#3b82f6',
    L: '#f97316',
    O: '#eab308',
    S: '#22c55e',
    T: '#a855f7',
    Z: '#ef4444'
};

const SHAPES = {
    I: [[0,0,0,0], [1,1,1,1], [0,0,0,0], [0,0,0,0]],
    J: [[1,0,0], [1,1,1], [0,0,0]],
    L: [[0,0,1], [1,1,1], [0,0,0]],
    O: [[1,1], [1,1]],
    S: [[0,1,1], [1,1,0], [0,0,0]],
    T: [[0,1,0], [1,1,1], [0,0,0]],
    Z: [[1,1,0], [0,1,1], [0,0,0]]
};

class Tetris {
    constructor() {
        this.boardCanvas = document.getElementById('tetris-board');
        this.nextCanvas = document.getElementById('next-piece');
        this.boardCtx = this.boardCanvas.getContext('2d');
        this.nextCtx = this.nextCanvas.getContext('2d');
        
        this.init();
        this.bindEvents();
        this.initTheme();
    }

    init() {
        this.boardCanvas.width = COLS * BLOCK_SIZE;
        this.boardCanvas.height = ROWS * BLOCK_SIZE;
        this.nextCanvas.width = 4 * BLOCK_SIZE;
        this.nextCanvas.height = 4 * BLOCK_SIZE;

        this.grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
        this.score = 0;
        this.lines = 0;
        this.level = 1;
        this.gameOver = false;
        this.paused = true;
        
        this.activePiece = null;
        this.nextPiece = this.getRandomPiece();
        this.dropCounter = 0;
        this.dropInterval = 1000;
        this.lastTime = 0;

        this.updateStats();
        this.draw();
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.toggleGame());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
        
        document.addEventListener('keydown', (e) => {
            if (this.gameOver || this.paused) return;
            
            switch(e.key) {
                case 'ArrowLeft': this.move(-1); break;
                case 'ArrowRight': this.move(1); break;
                case 'ArrowDown': this.drop(); break;
                case 'ArrowUp': this.rotate(); break;
                case ' ': this.hardDrop(); break;
            }
        });
    }

    getRandomPiece() {
        const types = Object.keys(SHAPES);
        const type = types[Math.floor(Math.random() * types.length)];
        return {
            type,
            shape: SHAPES[type],
            pos: { x: Math.floor(COLS / 2) - 1, y: 0 },
            color: COLORS[type]
        };
    }

    toggleGame() {
        if (this.gameOver) {
            this.restart();
            return;
        }
        
        this.paused = !this.paused;
        const btn = document.getElementById('start-btn');
        btn.textContent = this.paused ? 'RESUME' : 'PAUSE';
        
        if (!this.paused) {
            if (!this.activePiece) this.spawnPiece();
            requestAnimationFrame(this.update.bind(this));
        }
    }

    restart() {
        document.getElementById('game-overlay').classList.add('hidden');
        document.getElementById('start-btn').textContent = 'PAUSE';
        this.init();
        this.spawnPiece();
        this.paused = false;
        requestAnimationFrame(this.update.bind(this));
    }

    spawnPiece() {
        this.activePiece = this.nextPiece;
        this.nextPiece = this.getRandomPiece();
        this.drawNext();
        
        if (this.collide()) {
            this.handleGameOver();
        }
    }

    move(dir) {
        this.activePiece.pos.x += dir;
        if (this.collide()) {
            this.activePiece.pos.x -= dir;
        }
        this.draw();
    }

    rotate() {
        const originalShape = this.activePiece.shape;
        this.activePiece.shape = this.activePiece.shape[0].map((_, i) =>
            this.activePiece.shape.map(row => row[i]).reverse()
        );
        
        if (this.collide()) {
            this.activePiece.shape = originalShape;
        }
        this.draw();
    }

    drop() {
        this.activePiece.pos.y++;
        if (this.collide()) {
            this.activePiece.pos.y--;
            this.freeze();
            this.clearLines();
            this.spawnPiece();
        }
        this.dropCounter = 0;
        this.draw();
    }

    hardDrop() {
        while (!this.collide()) {
            this.activePiece.pos.y++;
        }
        this.activePiece.pos.y--;
        this.freeze();
        this.clearLines();
        this.spawnPiece();
        this.draw();
    }

    collide() {
        const { shape, pos } = this.activePiece;
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[y].length; x++) {
                if (shape[y][x]) {
                    const newX = pos.x + x;
                    const newY = pos.y + y;
                    if (newX < 0 || newX >= COLS || newY >= ROWS || (newY >= 0 && this.grid[newY][newX])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    freeze() {
        const { shape, pos, type } = this.activePiece;
        shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    const gridY = pos.y + y;
                    if (gridY >= 0) {
                        this.grid[gridY][pos.x + x] = type;
                    }
                }
            });
        });
    }

    clearLines() {
        let cleared = 0;
        for (let y = ROWS - 1; y >= 0; y--) {
            if (this.grid[y].every(cell => cell !== 0)) {
                this.grid.splice(y, 1);
                this.grid.unshift(Array(COLS).fill(0));
                cleared++;
                y++;
            }
        }
        
        if (cleared > 0) {
            this.lines += cleared;
            this.score += [0, 100, 300, 500, 800][cleared] * this.level;
            this.level = Math.floor(this.lines / 10) + 1;
            this.dropInterval = Math.max(100, 1000 - (this.level - 1) * 100);
            this.updateStats();
        }
    }

    handleGameOver() {
        this.gameOver = true;
        this.paused = true;
        document.getElementById('overlay-title').textContent = 'GAME OVER';
        document.getElementById('game-overlay').classList.remove('hidden');
        document.getElementById('start-btn').textContent = 'RESTART';
    }

    updateStats() {
        document.getElementById('score').textContent = this.score.toString().padStart(6, '0');
        document.getElementById('level').textContent = this.level;
        document.getElementById('lines').textContent = this.lines;
    }

    update(time = 0) {
        if (this.paused || this.gameOver) return;
        
        const deltaTime = time - this.lastTime;
        this.lastTime = time;
        this.dropCounter += deltaTime;
        
        if (this.dropCounter > this.dropInterval) {
            this.drop();
        }
        
        this.draw();
        requestAnimationFrame(this.update.bind(this));
    }

    draw() {
        this.boardCtx.clearRect(0, 0, this.boardCanvas.width, this.boardCanvas.height);
        
        // Draw grid lines (subtle)
        this.boardCtx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--board-border');
        this.boardCtx.lineWidth = 0.5;
        for(let i=0; i<=COLS; i++) {
            this.boardCtx.beginPath();
            this.boardCtx.moveTo(i*BLOCK_SIZE, 0);
            this.boardCtx.lineTo(i*BLOCK_SIZE, this.boardCanvas.height);
            this.boardCtx.stroke();
        }
        for(let i=0; i<=ROWS; i++) {
            this.boardCtx.beginPath();
            this.boardCtx.moveTo(0, i*BLOCK_SIZE);
            this.boardCtx.lineTo(this.boardCanvas.width, i*BLOCK_SIZE);
            this.boardCtx.stroke();
        }

        // Draw settled pieces
        this.grid.forEach((row, y) => {
            row.forEach((type, x) => {
                if (type) this.drawBlock(this.boardCtx, x, y, COLORS[type]);
            });
        });

        // Draw active piece
        if (this.activePiece) {
            const { shape, pos, color } = this.activePiece;
            shape.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value) this.drawBlock(this.boardCtx, pos.x + x, pos.y + y, color);
                });
            });
        }
    }

    drawNext() {
        this.nextCtx.clearRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
        const { shape, color } = this.nextPiece;
        
        // Center the piece in the 4x4 next canvas
        const offsetX = (4 - shape[0].length) / 2;
        const offsetY = (4 - shape.length) / 2;
        
        shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) this.drawBlock(this.nextCtx, x + offsetX, y + offsetY, color);
            });
        });
    }

    drawBlock(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
        
        // Add subtle shine/depth
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, BLOCK_SIZE - 2, 4);
        ctx.fillRect(x * BLOCK_SIZE + 1, y * BLOCK_SIZE + 1, 4, BLOCK_SIZE - 2);
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            this.updateThemeIcon();
        }
    }

    toggleTheme() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        this.updateThemeIcon();
        this.draw(); // Redraw grid with new theme colors
    }

    updateThemeIcon() {
        const icon = document.querySelector('#theme-toggle i');
        const isLight = document.body.classList.contains('light-mode');
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Start the game
window.addEventListener('DOMContentLoaded', () => {
    new Tetris();
});
