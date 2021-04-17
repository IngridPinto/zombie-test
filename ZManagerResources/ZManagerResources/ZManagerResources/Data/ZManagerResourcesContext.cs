using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZManagerResources.Model;

namespace ZManagerResources.Data
{
    public class ZManagerResourcesContext : DbContext
    {
        public ZManagerResourcesContext (DbContextOptions<ZManagerResourcesContext> options)
            : base(options)
        {
        }

        public DbSet<ZManagerResources.Model.Recurso> Recurso { get; set; }

        public DbSet<ZManagerResources.Model.ControleRecurso> ControleRecurso { get; set; }
    }
}
