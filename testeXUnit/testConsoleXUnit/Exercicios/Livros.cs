using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exercicios
{
    public class Biblioteca
    {
        private List<string> livros;

        public Biblioteca()
        {
            livros = new List<string>();
        }

        public void AdicionarLivro(string livro)
        {
            livros.Add(livro);
        }

        public List<string> ObterLivros()
        {
            return new List<string>(livros);
        }
    }
}
