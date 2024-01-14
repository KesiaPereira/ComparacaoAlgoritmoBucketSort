// Importando as classes do módulo correspondente
const AlgoritmosOrdenacao = require('./AlgoritmosOrdenacao');
const Cronometro = require('./Cronometro');
const PreencherAleatorio = require('./PreencherAleatorio');

function main() {
    const preenchimentoAutomatico = new PreencherAleatorio();
    const cronometro = new Cronometro();
    const algoritmosOrdenacao = new AlgoritmosOrdenacao();

    // Tamanhos das listas: 100, 500, 1000, 30000, 80000, 100000, 150000, 200000
    const tamanhoLista = 100; // Altere conforme necessário
    const lista = preenchimentoAutomatico.criarLista(tamanhoLista);

    console.log(`\n***** Lista de ${lista.length} elementos *****`);

    // Criando cópias da lista para cada algoritmo
    const listaAuxiliar1 = [...lista];
    const listaAuxiliar2 = [...lista];
    const listaAuxiliar3 = [...lista];
    const listaAuxiliar4 = [...lista];
    const listaAuxiliar5 = [...lista];
    const listaAuxiliar6 = [...lista];

    cronometro.iniciar();
    const bucketSort1 = algoritmosOrdenacao.bucketSort(listaAuxiliar1, sortingAlgorithm = algoritmosOrdenacao.bubbleSort);
    const tempoDuracao1 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao1)} usando o Bucket Sort + Bubble sort`);

    cronometro.iniciar();
    const bucketSort2 = algoritmosOrdenacao.bucketSort(listaAuxiliar2, sortingAlgorithm = algoritmosOrdenacao.selectionSort);
    const tempoDuracao2 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao2)} usando o Bucket Sort + Selection sort`);

    cronometro.iniciar();
    const bucketSort3 = algoritmosOrdenacao.bucketSort(listaAuxiliar3, sortingAlgorithm = algoritmosOrdenacao.insertionSort);
    const tempoDuracao3 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao3)} usando o Bucket Sort`);

    cronometro.iniciar();
    const bucketSort4 = algoritmosOrdenacao.bucketSort(listaAuxiliar4, sortingAlgorithm = algoritmosOrdenacao.mergeSort);
    const tempoDuracao4 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao4)} usando o Bucket Sort`);

    cronometro.iniciar();
    const bucketSort5 = algoritmosOrdenacao.bucketSort(listaAuxiliar5, sortingAlgorithm = algoritmosOrdenacao.quickSort);
    const tempoDuracao5 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao5)} usando o Bucket Sort`);

    cronometro.iniciar();
    const bucketSort6 = algoritmosOrdenacao.bucketSort(listaAuxiliar6, sortingAlgorithm = algoritmosOrdenacao.countingSort);
    const tempoDuracao6 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao6)} usando o Bucket Sort`);
}

// Verifica se o script está sendo executado diretamente
if (require.main === module) {
    main();
}
