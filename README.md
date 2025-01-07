# Snake-cube-puzzle  
Snake cube puzzle solver

## Description of subject:  
There is a 4x4x4 King Snake puzzle, unraveled it can be described with the following list: [3, 4, 4, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 4, 3, 3, 2, 4, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 4, 2, 4].  
See following image for reference:  
![Snake_King_Unraveled](/Images/Snake_King_Unraveled.jpg)  

Sanity check = Sum Snake - (Len Snake - 1) = 102 - (39 - 1) = 64

## To do:  
### End Goal:  
The end goal is to develop a program to solve the puzzle and display the solution in order to solve the puzzle in real life.  
See following image for reference:  
![Snake_King_Solved](/Images/Snake_King_Solved.jpg)

#### Snake King Cube puzzle Algorithm:  
Before I can start writing the program to solve the puzzle I must identify the mathematical algorithm for solving the puzzle.  

>[!Note]
>After an initial search the task seems very complex and therefore I have decided to work on a smaller scope of a 3x3x3 cube to begin with.  

### Snake Cube Puzzle  
This section is for a smaller 3x3x3 cube.  
As I do not own a 3x3x3 cube I will be using the one described in the following image:  
![Snake cube 3x3x3 unraveled](/Images/penup_20250103_132812.jpg)  
As can be seen from the image this Snake Cube's list is: [3, 2, 2, 3, 2, 3, 2, 2, 3, 3, 2, 2, 2, 3, 3, 3, 3]  
Sanity check = Sum Snake - (Len Snake - 1) = 43 - (17 - 1) = 27  

We can see that the Snake Cube list is made up only of 2 and 3 elements, so we can consider to represent these elements as folows:  
* 1 for fixed segments, these will replace our "3" elements from the list.
* 0 for flexible joints, these will replace our "2" elements from the list.

As such, we have snake = [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]  

if we consider the cube to be in a x, y, z axis system then the segments can go in the following 6 directions:  
* Along the x axis: right (+x); left (-x);
* Along the y axis: up (+y); down (-y);  
* Along the z axis: forwards (+z); backwards (-z);
