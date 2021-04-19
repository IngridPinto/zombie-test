using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using ZManagerResources.Data;

namespace ZManagerResources.Model
{
    public class ControleRecurso : IEntity
    {        
        public int Id { get; set; }
        public virtual Recurso Recurso { get; set; }
        public int Quantidade { get; set; }
        public string Usuario { get; set; }
        public bool Retirada { get; set; }
    }
}
