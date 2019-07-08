FROM node:latest

#create app directory
RUN mkdir /usr/src/app

COPY . /usr/src/app/

WORKDIR /usr/src/app

RUN npm run build

CMD ["npm", "run", "dev"]

# docker image build -t paginate_cache .
# docker run -it -p 3000:3000 paginate_cache