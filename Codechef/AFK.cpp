#include <stdio.h>
#include <iostream>
using namespace std;
long long int foo(int a,int b,int c)
{
	long long int left = 2*b,right = a+c;
	long long int diff = right-left;
	if(diff == 0)return 0;
	long long int ans = 0;
	diff = diff > 0 ? diff : -1 * diff;
	ans = diff%2 ? diff/2+1 : diff/2;
	return ans;
}
int main()
{
	//freopen("in.txt","r",stdin);
	int T;
	cin>>T;
	for(int t=0;t<T;t++)
	{
		int a,b,c;
		cin>>a>>b>>c;
		long long int ans = foo(a,b,c);
		cout<<ans<<endl;
	}
}
