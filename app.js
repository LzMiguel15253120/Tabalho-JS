const algorithms = {
    contagem: {
        title: 'Contagem de inteiros', fields: [{ id: 'inicio', label: 'Início', placeholder: 'Ex.: 1' }, { id: 'fim', label: 'Fim', placeholder: 'Ex.: 10' }],
        execute: ({ inicio, fim }) => ({ value: contarInteirosEntre(inicio, fim), detail: `Inteiros entre ${inicio} e ${fim}` })
    },
    fibonacci: {
        title: 'Número de Fibonacci', fields: [{ id: 'n', label: 'Posição (n)', placeholder: 'Ex.: 8', hint: 'A posição começa em 0.' }],
        execute: ({ n }) => ({ value: fibonacci(n), detail: `Valor na posição ${n}` })
    },
    mdc: {
        title: 'Máximo divisor comum', fields: [{ id: 'a', label: 'Primeiro número', placeholder: 'Ex.: 12' }, { id: 'b', label: 'Segundo número', placeholder: 'Ex.: 18' }],
        execute: ({ a, b }) => ({ value: mdc(a, b), detail: `MDC entre ${a} e ${b}` })
    },
    primo: {
        title: 'Verificar número primo', fields: [{ id: 'n', label: 'Número', placeholder: 'Ex.: 7' }],
        execute: ({ n }) => ({ value: ehPrimo(n) ? 'É primo' : 'Não é primo', detail: `Análise do número ${n}` })
    },
    ordenacao: {
        title: 'Ordenação por quicksort', fields: [{ id: 'numeros', label: 'Lista de números', placeholder: 'Ex.: 8, 3, 1, 6, 4', hint: 'Separe os valores por vírgula.' }],
        execute: ({ numeros }) => ({ value: quicksort(numeros).join(', '), detail: `${numeros.length} valores ordenados` })
    },
    somatoria: {
        title: 'Somatória de uma lista', fields: [{ id: 'numeros', label: 'Lista de números', placeholder: 'Ex.: 1, 2, 3, 4, 5', hint: 'Separe os valores por vírgula.' }],
        execute: ({ numeros }) => ({ value: somatorio(numeros), detail: `Soma de ${numeros.length} valores` })
    }
};

function contarInteirosEntre(inicio, fim) { if (fim < inicio) [inicio, fim] = [fim, inicio]; return fim - inicio + 1; }
function fibonacci(n) { if (n <= 0) return 0; if (n === 1) return 1; let anterior = 0, atual = 1; for (let i = 2; i <= n; i++) [anterior, atual] = [atual, anterior + atual]; return atual; }
function mdc(a, b) { while (b !== 0) [a, b] = [b, a % b]; return Math.abs(a); }
function ehPrimo(n) { if (n <= 1) return false; for (let i = 2; i < n; i++) if (n % i === 0) return false; return true; }
function quicksort(array) { if (array.length <= 1) return array; const pivot = array[array.length - 1], menores = [], maiores = []; for (let i = 0; i < array.length - 1; i++) (array[i] < pivot ? menores : maiores).push(array[i]); return [...quicksort(menores), pivot, ...quicksort(maiores)]; }
function somatorio(numeros) { return numeros.reduce((soma, numero) => soma + numero, 0); }

let selectedAlgorithm = 'contagem';
const form = document.querySelector('#algorithm-form');
const inputFields = document.querySelector('#input-fields');
const resultCard = document.querySelector('#result-card');
const historyList = document.querySelector('#history-list');

function renderFields() {
    const algorithm = algorithms[selectedAlgorithm];
    document.querySelector('#form-title').textContent = algorithm.title;
    inputFields.innerHTML = algorithm.fields.map(field => `<div class="field ${algorithm.fields.length === 1 ? 'full' : ''}"><label for="${field.id}">${field.label}</label><input id="${field.id}" name="${field.id}" type="text" inputmode="decimal" placeholder="${field.placeholder}" required>${field.hint ? `<span class="field-hint">${field.hint}</span>` : ''}</div>`).join('');
    resultCard.innerHTML = '<div class="result-placeholder"><span class="placeholder-mark">↗</span><span>O resultado aparecerá aqui</span></div>';
}

function parseValues() {
    const values = {};
    algorithms[selectedAlgorithm].fields.forEach(field => {
        const raw = form.querySelector(`input[name="${field.id}"]`).value.trim();
        if (!raw) throw new Error(`Preencha o campo “${field.label}”.`);
        if (field.id === 'numeros') {
            const list = raw.split(',').map(value => Number(value.trim()));
            if (!list.length || list.some(value => !Number.isFinite(value))) throw new Error('Use apenas números separados por vírgula.');
            values[field.id] = list;
        } else {
            const value = Number(raw);
            if (!Number.isFinite(value) || !Number.isInteger(value)) throw new Error('Use números inteiros válidos.');
            if (selectedAlgorithm === 'fibonacci' && value > 1476) throw new Error('Escolha uma posição até 1476 para evitar overflow.');
            values[field.id] = value;
        }
    });
    return values;
}

function showResult(result) { resultCard.innerHTML = `<div class="result-success"><div class="result-label">Resultado</div><div class="result-value">${result.value}</div><div class="result-detail">${result.detail}</div></div>`; }
function addHistory(result, values) {
    const input = Object.values(values).map(value => Array.isArray(value) ? `[${value.join(', ')}]` : value).join(' · ');
    const empty = historyList.querySelector('.empty-history'); if (empty) empty.remove();
    const item = document.createElement('div'); item.className = 'history-item'; item.innerHTML = `<div><div class="history-name">${algorithms[selectedAlgorithm].title}</div><div class="history-input">${input}</div></div><div class="history-result">${result.value}</div>`; historyList.prepend(item);
}

document.querySelectorAll('.algorithm-option').forEach(button => button.addEventListener('click', () => {
    selectedAlgorithm = button.dataset.algorithm;
    document.querySelectorAll('.algorithm-option').forEach(option => { option.classList.toggle('active', option === button); option.setAttribute('aria-selected', option === button); });
    renderFields();
}));
form.addEventListener('submit', event => { event.preventDefault(); try { const values = parseValues(); const result = algorithms[selectedAlgorithm].execute(values); showResult(result); addHistory(result, values); } catch (error) { resultCard.innerHTML = `<div class="error-message">${error.message}</div>`; } });
document.querySelector('#clear-history').addEventListener('click', () => { historyList.innerHTML = '<p class="empty-history">Suas execuções aparecerão aqui.</p>'; });
renderFields();