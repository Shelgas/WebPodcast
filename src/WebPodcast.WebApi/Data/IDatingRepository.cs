﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using WebPodcast.WebApi.Models;

namespace WebPodcast.WebApi.Data
{
    public interface IDatingRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<Podcast> GetPodcast(int id);
        Task<IEnumerable<Record>> GetRecords(int id);
        Task<Record> GetAudio(int id);

        Task<IEnumerable<Podcast>> GetPodcasts();
    }
}
