using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZManagerResources.Model;

namespace ZManagerResources.Data.EFCore
{
    public class EfCoreControleRecursoRepository : EfCoreRepository<ControleRecurso, ZManagerResourcesContext>
    {
        private readonly ZManagerResourcesContext zManagerResourcesContext;
        public EfCoreControleRecursoRepository(ZManagerResourcesContext zManagerResourcesContext) : base(zManagerResourcesContext)
        {
            this.zManagerResourcesContext = zManagerResourcesContext;
        }

        public override async Task<ControleRecurso> Add(ControleRecurso controleRecurso)
        {
            Recurso recurso = await zManagerResourcesContext.Set<Recurso>().FindAsync(controleRecurso.Recurso.Id);
            
            controleRecurso.Recurso = recurso ?? throw new Exception("É necessário vincular um recurso existente.");

            return await base.Add(controleRecurso);
        }

    }
}
