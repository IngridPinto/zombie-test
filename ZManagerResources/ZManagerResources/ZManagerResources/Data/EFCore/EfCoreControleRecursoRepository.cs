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
            controleRecurso = await VerificaEIncrementa(controleRecurso);

            return await base.Add(controleRecurso);
        }


        public override async Task<ControleRecurso> Update(ControleRecurso controleRecurso)
        {
            controleRecurso = await VerificaEIncrementa(controleRecurso);

            return await base.Update(controleRecurso);
        }

        private async Task<ControleRecurso> VerificaEIncrementa(ControleRecurso controleRecurso)
        {
            Recurso recurso = await zManagerResourcesContext.Set<Recurso>().FindAsync(controleRecurso.Recurso.Id);

            controleRecurso.Recurso = recurso ?? throw new Exception("É necessário vincular um recurso existente.");

            controleRecurso.Recurso.Quantidade = controleRecurso.Recurso.Quantidade + controleRecurso.Quantidade;

            zManagerResourcesContext.Entry(controleRecurso.Recurso).State = EntityState.Modified;

            await zManagerResourcesContext.SaveChangesAsync();

            zManagerResourcesContext.Entry(controleRecurso).State = EntityState.Detached;

            return controleRecurso;
        }

        public async Task<List<ControleRecurso>> GetRelatorio()
        {
            var temporaria = zManagerResourcesContext.Set<ControleRecurso>()
              .GroupBy(x => x.Recurso.Id)
              .Select(g => new
              {
                  recursoId = g.Key,
                  controleId = g.Max(row => row.Id)
              });

            var resultado = await zManagerResourcesContext.Set<ControleRecurso>()
                            .Join(temporaria, controle => controle.Id, temp => temp.controleId, (controle, temp) => new { controle, temp })
                            .Select(x => x.controle).ToListAsync();

            return resultado;
        }

    }
}
