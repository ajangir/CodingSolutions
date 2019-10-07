AFGJI FORTUNE TICKET

Susan loves fortune numbers very much. We all know that fortune numbers are positive integers whose decimal record contains only the fortune digits 4 and 7. For example, numbers 47, 744, 4 are fortune and 5, 177, 42367 are not.

Susan loves tickets very much. As we know, each ticket has a number that is a positive integer. Its length equals n (n is always even). Susan calls a ticket fortune if the ticket's number is a fortune number and the sum of digits in the first half (the sum of the first n / 2 digits) equals the sum of digits in the second half (the sum of the last n / 2 digits). Check if the given ticket is fortune.

Input

The first line contains
1. An even integer n (2 ≤ n ≤ 50) — the length of the ticket number that needs to be checked.
2. An integer whose length equals exactly n — the ticket number. The number may contain leading zeros.

Output

On the first line print "YES" if the given ticket number is fortune. Otherwise, print "NO" (without the quotes).

Examples
Input
2 47

Output
NO
Input
4 4738

Output
NO
Input
4 4774

Output
YES
Note
In the first sample the sum of digits in the first half does not equal the sum of digits in the second half (4 ≠ 7).
In the second sample the ticket number is not the fortune number
