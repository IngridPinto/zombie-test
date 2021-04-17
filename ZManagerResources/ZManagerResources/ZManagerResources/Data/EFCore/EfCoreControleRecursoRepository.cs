using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZManagerResources.Model;

namespace ZManagerResources.Data.EFCore
{
    public class EfCoreControleRecursoRepository : EfCoreRepository<ControleRecurso, ZManagerResourcesContext>
    {
        public EfCoreControleRecursoRepository(ZManagerResourcesContext zManagerResources) : base(zManagerResources)
        {

        }
    }
}
