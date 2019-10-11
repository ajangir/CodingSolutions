Nehru Gift

Jawaharlal Nehru loves to write poems so on Gandhi's birthday he wrote a poem for Gandhiji consisting of N lines (each line is string with lowercase alphabets 'a', 'b', 'c', 'd', 'e') and gave it to him. But he had a doubt whether Gandhiji had read the poem or not so he took a test of him. In the test he asked Q queries and in each query a string is provided. For each query, Gandhiji has to perform the following task-

Find all strings with the string given in the query as prefix. Count the number of letters after the prefix for each of these strings and add them. Gandhiji has to tell the final sum as well as the lexicographically smallest and lexicographically largest of these strings. Input: First line will contain N, number of lines in the Poem . Then N lines follows, each contains the string consisting of lowercase letters. Next Line contains a single integer Q, number of queries. Then Q lines follows each containing initial starting letters. Output: For each query print the sum, lexicographically smallest string and lexicographically largest string respectively seperated by spaces.

If, no line has the given string as prefix, print -1.

Constraints 1≤N≤105 1≤ Length of String ≤100 1≤ Q≤10000 1≤ Length of Intial letters ≤50 Sample Input: 5 adabc abcd abcdea dceba abcccaa 2 ab ea Sample Output: 11 abcccaa abcdea -1 EXPLANATION: Case 1: The string that begins with ab are abcd, abcdea and abcccaa.

abcd (2 letters after ab).

abcdea (4 letters after ab).

abcccaa (5 letters after ab).

Therefore, Sum is 2+4+5=11.

Among abcd, abcdea and abcccaa, the lexicographically smallest string is abcccaa and lexicographically largest string is abcdea.

Case 2: No string begins with ea. So answer is −1.
