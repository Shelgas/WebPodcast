using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPodcast.WebApi.Models;

namespace WebPodcast.WebApi.ViewModel
{
    public class PodcastForDetailed
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Photo { get; set; }
    }
}
