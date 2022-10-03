import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Indirection", "img/projects/indirection-icon.png", 
    `
    <div class="paragraph">
     <strong>Indirection</strong> is my first major game development project. It's out on Steam for around $3 USD.
     <br/>Video by <a href="https://www.youtube.com/c/thebacklogs" target="_blank">The Backlogs</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/gxAI3-lixJY" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe src="https://store.steampowered.com/widget/1744450/" frameborder="0" width="646" height="190"></iframe>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="indirection/Indirection.html" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Box Pushing Game", "img/projects/boxpushing-icon.png", `
    <div class="paragraph">
        <strong>Optimistic Chubby Blog</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@adonyi-gabor-604571">Adonyi Gábor</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="boxpushing/index.html" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    </div>
    `, "#5a78af", true)
];