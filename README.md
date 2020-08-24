# 05_HW


## Start with the HTML structure

The HTML on this was pretty straighforward

1. Create a header
2. Put some text in it
3. Create a paragraph element to dump the date into from JS
4. create a line to break up the header and the calendar
5. create a structure for each hour including: time stamp, textarea, and save button
6. copy and paste it for each hour of the work day and edit text as needed

## Checking IDs

This was the first project where I felt that I did a good job of fleshing out the whole project with pseudo-coding. In the pseudo-coding step, I realized that being vigilant about assigning IDs was the key to writing clean code. Every section got IDs, which made the JS and CSS so much easier.

## One slip up

I had one issue with my HTML, that I later caught and fixed. For the calendarEvent, I first created a div, and then put the textarea inside of that div. This meant that the text area didn't span the whole width between the time stamp and the save button. I figured out some ways to get it to stretch using negative margins in CSS and a bit of redundant code in JS. After I took a break and came back to the code, I realized I could just elimenate the parent DIV delete the superfluous code. Ever vigilant on the hunt for clean code!


## JS

## Timestamp

The timestamp was pretty easy. Once I figured out syntax from Moment.js, I was able to manipulate it to give me the proper timestamp: "Day of week, Month date(with appropriate suffix), year." The example provided didn't have the second comma, which is incorrect date formatting, so obviously that had to be rectified! Once I had it formatted correctly, I just needed to append it to the header.

## Changing Colors on the Cal

I created a variable called current hour and set it to the value of the current hour, which I pulled from Moments.js. I then looped through all the hours by ID. Since I had assigned each hour slot a numerical value equal to its military time hour stamp, I knew that I could use an if statement to see if the hour had passed, was present, or was still in the future and then change color accordingly.

The rub came in trying to get the ID value as an integer. However, I realized that if I simply used the parseInt() function, I'd get the integer value of the ID. I was pretty pleased with myself for that one. Then, all I had to do was traverse the dom inside of the two if statements to change the color of the calendarEvent elements.

## Local Storage

I created an event listener for the save buttons to add to local storage. First, using "this" and some dom traversing, I was able to get a the value of the parent ID, which, again, is a numeric value equal to the military time hour value. I then set that as the key value for local storage. Next, again using dom traversing, I pulled the value from the corresponding text area, and set that to the value for local storage. With these set, my local storage was now organized with the hour as the key and the text input as the value.

## Pulling from local storage

This one was a bit tricky for me. I had trouble figuring out what to loop through, since I wasn't creating an array of strings to add to local storage. I realized that I needed to find a way to loop through my scheduler div and create an object that contained all of its children so I had something to loopthrough. I found a bit of help online for this one. Here is the code:

    var scheduleHours = \$("#scheduler > div"); 

By using the ">" character, I was able to isolate the children (still sounds creepy. . . ) of "#scheduler."

The loop itself was a bit different. I needed it to start at 9, since that was the id of the first child element of #scheduler, and it went to 17, I had to set x=9, and loop until x = scheduleHours + 9.

The next if statement was probably the bit of code I am most proud of. I needed to figure out how to see if x was equal to the ID of an element. So, I ended up piecing together a few things I found after doing some resarch. Here's the code I ended up with:

    if (x === parseInt($("#" + x).attr("id"))) {
        $("#" + x)
        .children("#calendarEvent")
        .text(localStorage.getItem(x));
    }

I used parseInt because I knew that I needed an integer value. I found the \$("#" = x) and it was a gamechanger. I could now loop through the IDs and pull them as integers. And, for each ID, I could check if it had a corresponding entry in local storage and append as necessary.

## Clear button

I just threw this on at the end. It seemed like a nice bit of functionality to have.

## Lessons learned

1. I think that thinking about this from a data standpoint really helped me with this project and write clean code. I was able to consider how I wanted to organize and access each bit of data. After that, it was just figuring out some syntax bits here and there.

2. Pseudo-coding for the win! This was huge. I wrote out all the functionality before I even started. It helped me fly through the code.

3. Take a breather and look over your code with fresh eyes. Sometimes, when the brain has turned to mush, you just need to take a break from your code. When you come back to it, you might see it more clearly.
