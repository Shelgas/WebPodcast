using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebPodcast.WebApi.Models;

namespace WebPodcast.WebApi.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext _context;

        public DatingRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Podcast> GetPodcast(int id)
        {
            return await _context.Podcasts.Include(p => p.Records).FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Record>> GetRecords(int id)
        {
            return await _context.Records.Where(r => r.PodcastId == id).ToArrayAsync();
        }

        public async Task<IEnumerable<Podcast>> GetPodcasts()
        {
            return await _context.Podcasts.ToListAsync();
        }

    }
}
