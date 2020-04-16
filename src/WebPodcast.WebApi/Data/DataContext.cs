using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebPodcast.WebApi.Models;

namespace WebPodcast.WebApi.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Podcast> Podcasts { get; set; }
        public DbSet<Record> Records { get; set; }


        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
    }
}
