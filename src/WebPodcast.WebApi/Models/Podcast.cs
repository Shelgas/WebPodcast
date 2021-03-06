﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPodcast.WebApi.Models
{
    public class Podcast
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public ICollection<Record> Records { get; set; }

    }
}
