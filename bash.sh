sudo docker image build -t paginate_cache .
sudo docker run -it -p 3000:3000 paginate_cache

#change mod first: $ chmod 755 bash.sh
#then: $ ./bash.sh