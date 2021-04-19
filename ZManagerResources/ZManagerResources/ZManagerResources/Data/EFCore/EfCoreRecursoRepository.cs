using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZManagerResources.Model;

namespace ZManagerResources.Data.EFCore
{
    public class EfCoreRecursoRepository : EfCoreRepository<Recurso, ZManagerResourcesContext>
    {
        private readonly ZManagerResourcesContext zManagerResourcesContext;
        public EfCoreRecursoRepository(ZManagerResourcesContext zManagerResources) : base(zManagerResources)
        {
            this.zManagerResourcesContext = zManagerResources;
        }

        public override async Task<Recurso> Delete(int id)
        {
            bool existControle = await ExistControleRecurso(id);

            if (existControle)
                throw new Exception("Exclusão não permitida! O recurso tem pelo menos um controle associado!");

            return await base.Delete(id);
        }

        public override async Task<Recurso> Update(Recurso recurso)
        {
            bool existControle = await ExistControleRecurso(recurso.Id);

            if (existControle)
                throw new Exception("Exclusão não permitida! O recurso tem pelo menos um controle associado!");

            return await base.Update(recurso);
        }

        /// <summary>
        /// Verifica se existe pelo menos um registro de controle associado. Caso sim, não permite a exclusão.
        /// </summary>
        /// <returns></returns>
        private async Task<bool> ExistControleRecurso(int id)
        {
            var recurso = await zManagerResourcesContext.Set<Recurso>().FindAsync(id);

            List<ControleRecurso> controles = null;

            if (recurso != null)
            {
                controles = await zManagerResourcesContext.Set<ControleRecurso>()
                                    .Where(x => x.Recurso.Id == recurso.Id)
                                    .ToListAsync();

                zManagerResourcesContext.Entry(recurso).State = EntityState.Detached;
            }

            if (controles == null || controles.Count == 0)
            {
                return false;
            }

            return true;
        }

    }
}
