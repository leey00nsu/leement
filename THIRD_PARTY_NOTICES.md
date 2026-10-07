# Third-party notices

Leement's expanded registry uses selected Kibo UI component ideas and may adapt portions of its MIT-licensed source. Reference: https://github.com/shadcnblocks/kibo at commit `3d63cdb15b79d972e3dc38a10997987672f9b263`. This notice is retained for copied or substantially adapted code, including the initial Avatar Stack and Cursor source and the all 28 public block compositions (3 Applications and 25 Websites). Blocks use application-owned data and Leement primitives; copied or adapted files preserve the full MIT notice in their installed source. Each Leement registry item remains editable source in the consumer project.

## Kibo UI MIT license

Copyright (c) 2023 — Present shadcnblocks

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## WaveSurfer.js

The AudioPlayer registry item installs wavesurfer.js 7.12.11 and loads its waveform renderer through its public API on the client. Native audio controls remain available when enhancement fails. VideoPlayer and the shared motion registry items do not require this dependency. Source: https://github.com/katspaugh/wavesurfer.js. The dependency and its BSD-3-Clause license are distributed by its package. No CopySinger domain/backend source is included.

BSD 3-Clause License

Copyright (c) 2012-2023, katspaugh and contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## shadcn/ui

The documentation parity update adapts public Base component source, examples and all 70 public chart recipes at commit `295a1f114a138f23b5dfee0e0c6812394dfeb90c`. Source: https://github.com/shadcn-ui/ui. Leement applies its own tokens, control sizes and Motion behavior. The full license is retained at `licenses/shadcn-license.md` and distributed with adapted registry items.

MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Pixabay demo media

Checked on 2026-10-07. Leement code licensing does not license third-party media. The docs and editable examples integrate the following fixed public Pixabay sources; original video/music binaries are not redistributed in this repository or registry. Apps own their media and may replace these demo URLs with sources licensed for their use. External URLs can become unavailable; the media components retain error/retry and native fallback behavior.

The eleven photos were published before 2019-01-09 and are covered by CC0 under [Pixabay Terms section 4](https://pixabay.com/service/terms/). Later videos/music use the [Pixabay Content License](https://pixabay.com/service/license-summary/) and [Terms section 5](https://pixabay.com/service/terms/), including the restriction on standalone distribution. The complete docs/player composition is the intended use; a copied URL is not permission to redistribute a standalone music or video file. Consult [Pixabay's FAQ](https://pixabay.com/service/faq/) and retain source/license evidence for your own use.

Names, company relationships, recommendations and editorial stories are fictional layout examples. Stock portraits do not establish actual employment or endorsement. Model/property releases are not claimed; third-party rights still depend on the use context.

| Media | Creator | Original item | License |
| --- | --- | --- | --- |
| Photo | StartupStockPhotos | [Meeting, Brainstorming, Business](https://pixabay.com/photos/meeting-brainstorming-business-594091/) | CC0 |
| Photo | AlfredMuller | [Computer, Notebook, Office](https://pixabay.com/photos/computer-notebook-office-code-2788918/) | CC0 |
| Photo | Jo_Johnston | [Office, Boardroom, Meeting](https://pixabay.com/photos/office-boardroom-meeting-table-1516329/) | CC0 |
| Photo | Katzenfee50 | [Lake, Ulmener maar, Reflection](https://pixabay.com/photos/lake-ulmener-maar-reflection-3733649/) | CC0 |
| Photo | jplenio | [Hintersee, Lake, Mountains](https://pixabay.com/photos/hintersee-lake-mountains-nature-3601004/) | CC0 |
| Photo | Pexels | [Man, Model, Portrait](https://pixabay.com/photos/man-model-portrait-hairstyle-1283231/) | CC0 |
| Photo | shawrypa | [Man, Smile, Bold](https://pixabay.com/photos/man-smile-bold-1690965/) | CC0 |
| Photo | RyanMcGuire | [Man, Silly, Expression](https://pixabay.com/photos/man-silly-expression-869215/) | CC0 |
| Photo | JerzyGórecki | [Beautiful, Woman, Portrait](https://pixabay.com/photos/beautiful-woman-portrait-model-2359121/) | CC0 |
| Photo | Gromovataya | [Woman, Portrait, Fashion](https://pixabay.com/photos/woman-portrait-fashion-model-3083453/) | CC0 |
| Photo | JerzyGórecki | [Woman, Model, Portrait](https://pixabay.com/photos/woman-model-portrait-pose-style-3584435/) | CC0 |
| Video | mariancroitoru | [Lake, Houses, Hill](https://pixabay.com/videos/lake-houses-hill-mountain-boat-67201/) | Pixabay Content License |
| Video | JoshuaWoroniecki | [Waterfall, Fall, Forest](https://pixabay.com/videos/waterfall-fall-forest-tranquil-189692/) | Pixabay Content License |
| Video | 21698102 | [City, Day, Arch](https://pixabay.com/videos/city-day-arch-people-walking-wet-115053/) | Pixabay Content License |
| Music | GavinNellist | [Atmospheric Ambient Music with Piano](https://pixabay.com/music/ambient-atmospheric-ambient-music-with-piano-108412/) | Pixabay Content License |
| Music | FreeMusicForVideo | [Ambient Piano](https://pixabay.com/music/solo-piano-ambient-piano-524039/) | Pixabay Content License |

Music “Ambient Piano” (524039) displays **Content ID Registered** on its official item. “Atmospheric Ambient Music with Piano” (108412) did not display a badge when checked; registration status is **unconfirmed**, not asserted absent. Keep the original item and applicable license/download evidence for downstream uploads or claims. No external-platform upload is performed by the docs examples. The city video's official creator identifier is 21698102; an unverified personal name is not substituted.

The machine-readable source/provenance inventory is `apps/docs/lib/demo-media.json`. It records observed media/poster/thumbnail URLs, publication and verification dates, actual dimensions/duration, file size and SHA-256, Content ID status, and source usages. The source URLs in examples are literal so installed consumers do not rely on docs-only public assets.
