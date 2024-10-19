


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Exercicios.Test
{
    public class BibliotecaUnitTest
    {
        [Fact]
        public void TestarAdicionarLivro()
        {
            // Arrange
            var biblioteca = new Biblioteca();
            var livroParaAdicionar = "O homen mais rico da babilonia";

            // Act
            biblioteca.AdicionarLivro(livroParaAdicionar);
            var livros = biblioteca.ObterLivros();

            // Assert
            Assert.Contains(livroParaAdicionar, livros);
        }
    }
}
