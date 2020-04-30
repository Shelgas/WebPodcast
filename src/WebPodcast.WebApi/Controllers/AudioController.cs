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
    public class AudioController : ControllerBase
    {
        private IDatingRepository _repo;
        private IMapper _mapper;

        public AudioController(IDatingRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAudio(int id)
        {
            var audio = await _repo.GetAudio(id);
            var audioForReturn = _mapper.Map<Audio>(audio);
            return Ok(audioForReturn);
        }
    }
}