using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebPodcast.WebApi.Data;
using WebPodcast.WebApi.ViewModel;

namespace WebPodcast.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;

        public RecordController(IDatingRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecords(int id)
        {
            var records = await _repo.GetRecords(id);
            var recordsForPodcast = _mapper.Map<IEnumerable<RecordsForPodcastDetailed>>(records.OrderBy(x => x.UploadDate).Reverse());
            return Ok(recordsForPodcast);
        }
    }
}