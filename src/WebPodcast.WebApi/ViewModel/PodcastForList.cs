﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using WebPodcast.WebApi.Models;
using WebPodcast.WebApi.ViewModel;

namespace WebPodcast.WebApi.DTO
{
    public class PodcastForList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Photo { get; set; }

    }
}
