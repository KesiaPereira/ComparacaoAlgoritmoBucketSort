class AlgoritmosOrdenacao {
    static bubbleSort(arr) {
        var len = arr.length;
        var swapped;

        do {
            swapped = false;
            for (var i = 0; i < len - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // Troca os elementos se estiverem na ordem errada
                    var temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);

        return arr;
    }

    static selectionSort(arr) {
        var len = arr.length;

        for (var i = 0; i < len - 1; i++) {
            // Encontra o índice do menor elemento na parte não ordenada
            var minIndex = i;
            for (var j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            // Troca o elemento atual com o menor elemento encontrado
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        return arr;
    }

    static insertionSort(arr) {
        var len = arr.length;

        for (var i = 1; i < len; i++) {
            var key = arr[i];
            var j = i - 1;

            // Move os elementos do arr[0..i-1] que são maiores que key para uma posição à frente
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            // Insere o elemento key na posição correta
            arr[j + 1] = key;
        }

        return arr;
    }

    static mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        // Divide o array ao meio
        var meio = Math.floor(arr.length / 2);
        var metadeEsquerda = arr.slice(0, meio);
        var metadeDireita = arr.slice(meio);

        // Chama recursivamente a função de mergeSort para as duas metades
        var metadeEsquerdaOrdenada = AlgoritmosOrdenacao.mergeSort(metadeEsquerda);
        var metadeDireitaOrdenada = AlgoritmosOrdenacao.mergeSort(metadeDireita);

        // Mescla as duas metades ordenadas
        return AlgoritmosOrdenacao.merge(metadeEsquerdaOrdenada, metadeDireitaOrdenada);
    }

    static merge(metadeEsquerda, metadeDireita) {
        var resultado = [];
        var i = 0;
        var j = 0;

        // Combina as duas metades ordenadas em um único array ordenado
        while (i < metadeEsquerda.length && j < metadeDireita.length) {
            if (metadeEsquerda[i] < metadeDireita[j]) {
                resultado.push(metadeEsquerda[i]);
                i++;
            } else {
                resultado.push(metadeDireita[j]);
                j++;
            }
        }

        // Adiciona os elementos restantes, se houver, de ambas as metades
        return resultado.concat(metadeEsquerda.slice(i), metadeDireita.slice(j));
    }

    static quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        // Escolhe um elemento como pivô (neste exemplo, o último elemento)
        var pivô = arr[arr.length - 1];
        var menores = [];
        var maiores = [];

        // Divide os elementos em duas listas, menores e maiores que o pivô
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivô) {
                menores.push(arr[i]);
            } else {
                maiores.push(arr[i]);
            }
        }

        // Chama recursivamente a função quickSort para as duas listas
        return [...AlgoritmosOrdenacao.quickSort(menores), pivô, ...AlgoritmosOrdenacao.quickSort(maiores)];
    }

    static countingSort(arr) {
        // Encontrar o valor máximo no array para determinar o tamanho do array de contagem
        var max = Math.max(...arr);

        // Inicializar um array de contagem com zeros
        var countArray = new Array(max + 1).fill(0);

        // Contar a ocorrência de cada elemento no array original
        for (var i = 0; i < arr.length; i++) {
            countArray[arr[i]]++;
        }

        // Reconstruir o array ordenado usando o array de contagem
        var sortedArray = [];
        for (var j = 0; j < countArray.length; j++) {
            while (countArray[j] > 0) {
                sortedArray.push(j);
                countArray[j]--;
            }
        }

        return sortedArray;
    }

    static bucketSort(arr, bucketSize = 5) {
        if (arr.length === 0) {
            return arr;
        }

        // Encontrar o valor mínimo e máximo no array
        var minValue = Math.min(...arr);
        var maxValue = Math.max(...arr);

        // Calcular o número de baldes necessários
        var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;

        // Inicializar baldes
        var buckets = new Array(bucketCount);
        for (var i = 0; i < bucketCount; i++) {
            buckets[i] = [];
        }

        // Distribuir os elementos nos baldes
        for (var j = 0; j < arr.length; j++) {
            var bucketIndex = Math.floor((arr[j] - minValue) / bucketSize);
            buckets[bucketIndex].push(arr[j]);
        }

        // Ordenar cada balde individualmente (mudar o algoritmo de ordenação por aqui)
        for (var k = 0; k < bucketCount; k++) {
            buckets[k] = AlgoritmosOrdenacao.bubbleSort(buckets[k]);
        }

        // Concatenar os baldes ordenados para obter o array final ordenado
        var sortedArray = [].concat(...buckets);

        return sortedArray;
    }
}

// Exportando a classe para ser utilizada em outros arquivos
module.exports = AlgoritmosOrdenacao;
