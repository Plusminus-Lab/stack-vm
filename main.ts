import*as f from'fs'
let I='/input/',T="0<T15263        222222212221222 222             @AA@0           12              1141",w=f.writeFileSync,g=f.readFileSync,d,p,u,o,q,R=(S=[],K=[],M=[],c=0,i=0,n=1e6,t,x,v,k,j,l,m,a,b,z,s)=>{for(;;){if(t=!n--?10:!((v=T.charCodeAt(x=p[c])-48)>=0)?5:!(p[c+(k=v>>3)]+1)?9:(l=S.length)<(j=v&3)?2:v&4&&l>255?3:([a,b,z]=S.splice(l-j),m=k&&p.readIntLE(c+1,k),c+=k+1,x>18&&x<23&&!b)?4:x>>1==32&&(x&1?b:a)>>>0>255?6:x==51&&K[63]?7:x==52&&!K[0]?8:x>79&&x<82&&o.length+(s=x>80?[a]:Buffer.from(a+'')).length>65536?11:!x|x==83?a|256:0)return t&255
S.push(...x<8?[,[m],[m],[],[a,a],[b,a],[a,b,a],[b,z,a]][x]:x<35?[[a+b,a-b,Math.imul(a,b),a/b,a%b,(j=a>>>0)/(l=b>>>0),j%l,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,0,a==b,a<b,j<l][x-16]|0]:x==64?[M[a]|0]:x==82?[u[i++]??-1]:[])
c=[1,!a,a][x-48]?c+m:x==51?K.push(c)&&m&65535:x==52?K.pop():c
if(x==65)M[b]=a
if(x>79&&x<82)o.push(...s)}}
for(d of f.readdirSync(I)){q=I+d+'/';p=g(q+'program.bin');u=g(q+'input.bin');o=[];f.mkdirSync(d='/output/'+d);w(d+'/exit.txt',R()+'');w(d+'/stdout.bin',Buffer.from(o))}
