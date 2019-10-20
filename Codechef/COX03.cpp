#include <stdio.h>
#include <iostream>
using namespace std;

bool foo(string s)
{
	int n = s.length();
	for(int i=0;i<n;i++)
	{
		if((s[i] != '4') && (s[i] != '7'))return false;
	}
	int sum1 = 0,sum2 = 0;
	for(int i=0;i<n/2;i++)
	{
		sum1 += s[i]-'0';
		sum2 += s[n/2+i]-'0';
	}
	return sum1 == sum2;
}
int main()
{
	//freopen("in.txt","r",stdin);
	//freopen("out.txt","w",stdout);
	int n;
	string s;
	cin>>n>>s;
	bool flag = foo(s);
	if(flag)cout<<"YES"<<endl;
	else cout<<"NO"<<endl;
}
