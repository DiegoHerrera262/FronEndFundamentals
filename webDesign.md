# Designing my personal website

Here I document the process of setting up my personal website. A priori, I would like to design it not only as a site for showcasing my projects and experience. In this repo, I not only document the process of learning enough HTML, CSS nad JS for setting up the website, but also the design stages. Here, I document all the design.

## Defining the meta-structure of my website.

Well, I have drawn some inspiration from different personal websites that I like. On one hand, I would like my site to present me as a scientist, which means that the following information should appear

1. Profile and expertise
1. Honors and achievements
1. Undergraduate projects
1. Current projects and aspirations
1. Basic contact information
1. Social media links

Now, I really need to showcase my projects. This is something that needs to be quite visible. Most of my projects are stored in Github Repos. So links tho those should be available.

> Then, should I document all my personal projects in a blog fashion?

Well that is something to be decided. I also have experience as a software developer that needs to be addressed. This is another aspect of my professional skills that has to be shared. I currently have no projects, and thus I definitely need to set out to scale my portfolio as fast as possible. At this stage, my programming projects are only the _Metrologística_ landing page.

> I notice that I have reasonable knowledge of React, but no personal project to showcase!

However, I need to showcase that, since I really want to be a front-end developer, albeit amateur.

Last but not least, I should definitely have my own blog (in English) where all my thoughts, ideas and current investigation projects are open to discussion and debate.

> At first, I think I'm having my blog in this site.

The basic structure of my website starts with a _home page_, which leads to five important fields that I would like to showcase in my site: personal projects, about me, blog, and contact. On the projects components, I would like to showcase my work on computer science, machine learning, quantum physics, and quantum computing. The contact section would be a simple form, that sens a mail, I don't think more is needed. The blog section is the most complex, since I would like to have different post categories, display latest ones, and possibly search. Finally, the about components should be a simple summary of my CV, so that whoever checks out my site, may feel compelled to hire me.

As a result of this thoughts, I decided to structure my site in the following files:

1. `index.html`
1. `about.html`
1. `blog_index.html`
1. `projects.html`
   - `qp_projects.html`
   - `qc_projects.html`
   - `ml_projects.html`
   - `cc_projects.html`
1. `pots.html`

I am thinking about using a static site generator, like Jekyll, for managing my blog. I still haven't decided which one. The main problem of Jekyll is that I don't know how to manage DOM events, like clicks. That is, I am not sure how to integrate it with JS.

## The design process

Now that have a greater idea about how my site will be structured, I proceed to the process of creating a design using Adobe XD. As is standard today, I am creating views for [desktop](https://xd.adobe.com/view/58ee9389-0c0e-412d-8c94-0c6fe374f795-0dbd/), [tablet](https://xd.adobe.com/view/d2b5746b-997e-4805-8bc0-af6447456330-87e6/), and [mobile devices](https://xd.adobe.com/view/93791a9c-4abc-4e9b-98c3-76f6500d8730-c62a/). In terms of colors, I decided to o with a dark theme. I liked a black background with purple/violet/white colors for the content. This mainly because of Qiskit's colors. I settled down with _Code Next_ and _Biotif_ fonts for the text. Code Next is used for titles and subtitles, while Biotif is used for paragraphs and other content. Anyways, the actual usage of the fonts and colors is explicit on the design.

### Setting up the global elements

The global elements on any page are the _footer_ and the _navbar_. The navbar has three important components:

1. **Main menu**
1. **Logo button**
1. **Social menu**

The _main menu_ contains links to the important pages of my site: home, projects, blog, and about. The _logo button_ is the one that belongs to my branding, and directs to home. Finally, in the _social menu_, I include link to my social networks, and a redirection to the contact form.

The footer has important information about me, like my name, my current department, emails and a redirection to both home and contact form. At first, I wanted to include another logo, but settled for a simple letter logo.

And that basically summarizes the thought that went noto designing the global elements of my website!

### Setting up the home view

This page is used for engaging the viewer and summarizing the important points of my website. The main sections of my website are

1. _Hero section_
1. _Projects section_
1. _Blog section_
1. _Contact section_

So first, I include a hero section, with a cute welcome graphic that resembles a quantum circuit running with Qiskit. In this section, I set up a simple summary of my interests as well as a redirection to my about page.

The following section is the projects section. This has links to my main repositories on GitHub by category (Quantum physics, quantum computing, machine learning, computer science). The have such lists on the corresponding HTML files. I might need to use Github API to fetch the list of my repositories by category

The next section is the blog one. The idea here is to present my latest posts so that possible viewers may be inclined to read them. This is one of the main challenges of my website, since I don't know how to do this with pure JS. There is n mystery here, just that.

Finally, in the contact section, I include a funky image with my favorite equations, since I am a physicist, and a link that renders the contact form. This is quite straightforward... and perhaps a little redundant. But I'm very fond of the image :).

### Designing the about view

Well, this view is a prettier version of my CV. Basically, starts with a picture of myself, and a brief description of who I am, as well as an actual link to download my CV. Then, m experience and education is presented, with a button for downloading my diplomas and certificates. FiNally, my skills and interests are present, by means of links to the projects view.

Up to here, a pretty decent personal site is cooked. I basically present all the relevant information for someone interest in enrolling me on their team. So, I decide to start creating a simple mock up in pure HTML, CSS, and JS. The main features of the site are contained on this views.
