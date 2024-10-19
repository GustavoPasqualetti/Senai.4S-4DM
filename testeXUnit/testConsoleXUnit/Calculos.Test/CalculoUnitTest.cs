using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Calculos.Test
{
    public class CalculoUnitTest
    {
        [Fact]
        public void TestarMetodoSomar()
        {
            var x1 = 4.1;
            var x2 = 5.9;
            var valorEsperado = 10;

            var soma = Calculo.Somar(x1, x2);

            Assert.Equal(valorEsperado, soma);
        }

        [Fact]
        public void TestarMetodoSubtrair()
        {
            var x1 = 8;
            var x2 = 2.5;
            var valorEsperado = 5.5;

            var soma = Calculo.Subtrair(x1, x2);

            Assert.Equal(valorEsperado, soma);
        }

        [Fact]
        public void TestarMetodoDividir()
        {
            var x1 = 15;
            var x2 = 5;
            var valorEsperado = 3;

            var soma = Calculo.Dividir(x1, x2);

            Assert.Equal(valorEsperado, soma);
        }

        [Fact]
        public void TestarMetodoMultiplicar()
        {
            var x1 = 6;
            var x2 = 5;
            var valorEsperado = 30;

            var soma = Calculo.Multiplicar(x1, x2);

            Assert.Equal(valorEsperado, soma);
        }
    }
}
