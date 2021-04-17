using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZManagerResources.Model;

namespace ZManagerResources.Data.EFCore
{
    public class EfCoreRecursoRepository : EfCoreRepository<Recurso, ZManagerResourcesContext>
    {
        public EfCoreRecursoRepository(ZManagerResourcesContext zManagerResources) : base(zManagerResources)
        {

        }
    }
}
