// Importando a classe AlgoritmosOrdenacao do arquivo AlgoritmosOrdenacao.js
const AlgoritmosOrdenacao = require('./AlgoritmosOrdenacao');
const Cronometro = require('./Cronometro');
const PreencherAleatorio = require('./PreencherAleatorio');

function main() {
    const preenchimentoAutomatico = new PreencherAleatorio();
    const cronometro = new Cronometro();

    // Tamanhos das listas: 100, 500, 1000, 30000, 80000, 100000, 150000, 200000
    const tamanhoLista = 100; // Altere conforme necessário
    const lista = PreencherAleatorio.criarLista(tamanhoLista);

    console.log(`\n***** Lista de ${lista.length} elementos *****`);

    // Criando cópias da lista para cada algoritmo
    const listaAuxiliar1 = [...lista];
    const listaAuxiliar2 = [...lista];
    const listaAuxiliar3 = [...lista];
    const listaAuxiliar4 = [...lista];
    const listaAuxiliar5 = [...lista];
    const listaAuxiliar6 = [...lista];

    cronometro.iniciar();
    // Chamando a função estática diretamente na classe AlgoritmosOrdenacao
    const bucketSort1 = AlgoritmosOrdenacao.bucketSort(listaAuxiliar1, AlgoritmosOrdenacao.bubbleSort);
    const tempoDuracao1 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao1)} usando o Bucket Sort + Bubble sort`);

    cronometro.iniciar();
    const bucketSort2 = AlgoritmosOrdenacao.bucketSort(listaAuxiliar2, AlgoritmosOrdenacao.selectionSort);
    const tempoDuracao2 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao2)} usando o Bucket Sort + Selection sort`);

    cronometro.iniciar();
    const bucketSort3 = AlgoritmosOrdenacao.bucketSort(listaAuxiliar3, AlgoritmosOrdenacao.insertionSort);
    const tempoDuracao3 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao3)} usando o Bucket Sort + Insertion sort`);

    cronometro.iniciar();
    const bucketSort4 = AlgoritmosOrdenacao.bucketSort(listaAuxiliar4, AlgoritmosOrdenacao.mergeSort);
    const tempoDuracao4 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao4)} usando o Bucket Sort + Merge sort`);

    cronometro.iniciar();
    const bucketSort5 = AlgoritmosOrdenacao.bucketSort(listaAuxiliar5, AlgoritmosOrdenacao.quickSort);
    const tempoDuracao5 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao5)} usando o Bucket Sort + Quick sort`);

    cronometro.iniciar();
    const bucketSort6 = AlgoritmosOrdenacao.bucketSort(listaAuxiliar6, AlgoritmosOrdenacao.countingSort);
    const tempoDuracao6 = cronometro.parar();
    console.log(`\n--> Ordenada em ${cronometro.formatarTempo(tempoDuracao6)} usando o Bucket Sort + Counting sort`);
}

// Verifica se o script está sendo executado diretamente
if (require.main === module) {
    main();
}
