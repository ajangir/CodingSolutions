#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<long long int> array;
void print(vector<long long int> a)
{
    for(int i=0;i<a.size();i++)cout<<a[i]<<" ";
    cout<<endl;
}
int foo(int l,int r,long long int y)
{
    int leftOffset = array[l-1];
    vector<long long int> data(array.begin()+l-1,array.begin()+r);
    //print(data);
    sort(data.begin(),data.end());
    //print(data);
    long long int sum = 0,count = 0;
    for(int i=0;i<data.size();i++)
    {
        sum += data[i];
        count++;
        if(sum >= y)return sum;
    }
    if(sum >= y)return sum;
    return -1;
}
int main() 
{
	int n;
	cin>>n;
	array.resize(n);
	for(int i=0;i<n;i++)cin>>array[i];
	//print(array);
	int q;
	cin>>q;
	for(int i=0;i<q;i++)
	{
	    int l,r;long long int y;
	    cin>>l>>r>>y;
	    cout<<foo(l,r,y)<<endl;
	}
	return 0;
}
