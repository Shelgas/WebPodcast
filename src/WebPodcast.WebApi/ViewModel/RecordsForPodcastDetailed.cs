using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPodcast.WebApi.ViewModel
{
    public class RecordsForPodcastDetailed
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime UploadDate { get; set; }
        public string Description { get; set; }
        public string PathToRecord { get; set; }
    }
}
