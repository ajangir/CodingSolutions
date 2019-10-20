//
#include <bits/stdc++.h>
#define lli long long int
#define mod 1000000007
#define inf 1000000000000000000
#define fastio ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
using namespace std;
const int alphabet=26;
struct Node
{
    Node* children[alphabet];
    bool isEndOfWord;
    lli sum, count;
};
Node* getNode ()
{
    Node* node=new Node;
    node->isEndOfWord=false;
    for (int i=0; i<alphabet; i++) {
        node->children[i]=NULL;
    }
    node->sum=node->count=0;
    return node;
}
void add (Node* root, string key)
{
    Node* crawl=root;
    int len=key.length();
    for (int i=0; i<len; i++) {
        int index=key[i]-97;
        if (crawl->children[index]==NULL) {
            crawl->children[index]=getNode();
        }
        crawl=crawl->children[index];
        crawl->count++;
        crawl->sum+=len;
    }
    crawl->isEndOfWord=true;
}
void printSmallest (Node *root, string s)
{
    if (root->isEndOfWord) {
        cout<<s<<" ";
        return ;
    }
    for (int i=0; i<alphabet; i++) {
        if (root->children[i]!=NULL) {
            printSmallest(root->children[i], s+char(i+97));
            return ;
        }
    }
}
void printLargest (Node *root, string s)
{
    for (int i=alphabet-1; i>=0; i--) {
        if (root->children[i]!=NULL) {
            printLargest(root->children[i], s+char(i+97));
            return ;
        }
    }
    cout<<s<<" ";
}
void query (Node* root, string key)
{
    Node* crawl=root;
    int len=key.length();
    for (int i=0; i<len; i++) {
        int index=key[i]-97;
        if (crawl->children[index]==NULL) {
            cout<<-1;
            return ;
        }
        crawl=crawl->children[index];
    }
    if (crawl!=NULL) {
        lli ans=crawl->sum-(len*crawl->count);
        cout<<ans<<" ";
        printSmallest(crawl, key);
        printLargest(crawl, key);
        return ;
    }
    cout<<-1;
}
int main ()
{
    fastio;
    int n;
    cin>>n;
    Node *root=getNode();
    for (int i=0; i<n; i++) {
        string s;
        cin>>s;
        add(root, s);
    }
    int q;
    cin>>q;
    while (q--) {
        string s;
        cin>>s;
        query(root, s);
        cout<<endl;
    }
    return 0;
}
