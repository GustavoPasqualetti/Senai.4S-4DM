using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Exercicios.Test
{
    public class ValidadorEmailUnitTest
    {
        [Theory]
        [InlineData("usuario@dominio.com")]
        [InlineData("usuario.com")]
        [InlineData("usuario@dominio")]

        public void TestarValidarEmail(string email)
        {
            var resultadoEsperado = true;
            
            var resultado = ValidadorEmail.ValidarEmail(email);

            // Assert
            Assert.Equal(resultado, resultadoEsperado);
        }
    }
}
