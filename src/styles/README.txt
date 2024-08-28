I included the :root in our css file so we could all be uniformed, I also added a README.txt file if you want to access this same guide in the code.

Kindly add this to every CSS file you make.
This is to stay uniformed all throughout the code.

:root{
--primary-color: #121212;
--secondary-color: #ecf0f1;
--tertiary-color: #FCBF15;
--quaternary-color: #FFFFFF;
--poppins: 'Poppins', sans-serif;
--title-size: 2rem;
--heading-1-size: 1.5rem;
--paragraph-size: 0.85rem;
}


How does this work?

":root" is like your watercolor palette. You can assign you pre-made designs and dimensions that you can easily just call out all throughout your code. Just like how you place your choice of colors in your palette that you’ll use for your painting.

Your CSS code may look like this:

[example 1]

css
.homepage-section-1 h1{
font size: 2rem;
}

.homepage-section-2 h1{
font-size: 2rem;
}
```

Of course, as the lines of codes multiply. It can get overwhelming to type the same size again and again. You can even mistype it, or lose track of your values. This is where ":root" comes in, this helps you assign values to style designs to easily just call it with a simple "var()"

If you open the home.css under folder "styles" -> "home" -> "home.css" You'll notice how ":root" and "var()" is being used all throughout. So, instead of your code being like example 1, it will be like this:

[example 2]

css
.homepage-section-1 h1{
font size: var(--title-size);
}

.homepage-section-2 h1{
font-size: var(--title-size)
}
