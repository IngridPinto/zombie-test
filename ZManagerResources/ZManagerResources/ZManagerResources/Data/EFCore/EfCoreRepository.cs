using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZManagerResources.Data;

namespace ZManagerResources.Data.EFCore
{
    public abstract class EfCoreRepository<TEntity, TContext> : IRepository<TEntity>
        where TEntity : class, IEntity
        where TContext : ZManagerResourcesContext
    {
        private readonly TContext zManagerResourcesContext;
        public EfCoreRepository(TContext context)
        {
            this.zManagerResourcesContext = context;
        }
        public async Task<TEntity> Add(TEntity entity)
        {
            zManagerResourcesContext.Set<TEntity>().Add(entity);
            await zManagerResourcesContext.SaveChangesAsync();
            return entity;
        }

        public async Task<TEntity> Delete(int id)
        {
            var entity = await zManagerResourcesContext.Set<TEntity>().FindAsync(id);
            if (entity == null)
            {
                return entity;
            }

            zManagerResourcesContext.Set<TEntity>().Remove(entity);
            await zManagerResourcesContext.SaveChangesAsync();

            return entity;
        }

        public async Task<TEntity> Get(int id)
        {
            return await zManagerResourcesContext.Set<TEntity>().FindAsync(id);
        }

        public async Task<List<TEntity>> GetAll()
        {
            return await zManagerResourcesContext.Set<TEntity>().ToListAsync();
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            zManagerResourcesContext.Entry(entity).State = EntityState.Modified;
            await zManagerResourcesContext.SaveChangesAsync();
            return entity;
        }
    }
}
