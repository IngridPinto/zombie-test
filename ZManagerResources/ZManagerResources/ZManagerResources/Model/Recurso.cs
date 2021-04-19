using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using ZManagerResources.Data;

namespace ZManagerResources.Model
{
    public class Recurso : IEntity
    {
        [Key, ForeignKey("Recurso")]
        public int Id { get; set; }
        public string Descricao { get; set; }
        public int Quantidade { get; set; }
        public string Observacao { get; set; }
    }
}
