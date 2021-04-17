using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ZManagerResources.Data;
using ZManagerResources.Model;
using ZManagerResources.Data.EFCore;

namespace ZManagerResources.Controllers
{
    public class RecursoController : ZManagerResourcesController<Recurso, EfCoreRecursoRepository>
    {
        public RecursoController(EfCoreRecursoRepository repository) : base(repository)
        {
        }
    }
}
