 #include<cstdio>
int a[1000000];
int b[1000000];
int c[1000000];


int main(){
	int n,m;
	scanf("%d %d",&n,&m);
	for(int i = 0 ; i < n ; i++)
		scanf("%d",&a[i]);
	for(int i = 0 ; i < m ; i++)
		scanf("%d",&b[i]);
	int i = 0, j = 0, k = 0;
	while(i< n && j < m){
		if(a[i] > b[j]) c[k++] = b[j++];
		else c[k++] = a[i++];
	}
	while(i < n) c[k++] = a[i++];
	while(j < m) c[k++] = b[j++];

	for(int l = 0 ; l < k ; l++)
		printf("%d ",c[l]);
	printf("\n");
}