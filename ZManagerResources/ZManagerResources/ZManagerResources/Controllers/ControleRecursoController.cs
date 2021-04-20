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
    public class ControleRecursoController : ZManagerResourcesController<ControleRecurso, EfCoreControleRecursoRepository>
    {
        private readonly EfCoreControleRecursoRepository repository;
        public ControleRecursoController(EfCoreControleRecursoRepository repository) : base(repository)
        {
            this.repository = repository;
        }

        [HttpGet("relatorio")]
        public async Task<List<ControleRecurso>> GetSummary()
        {
            return await repository.GetRelatorio();
        }

    }
}
