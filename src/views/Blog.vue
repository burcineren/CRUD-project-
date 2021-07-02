<template>
    <div class="container">
      <div class="card navbar is-light m-5 columns"  v-for="blogPost_item in blogPostList" :key="blogPost_item.id">
        <div class="card-content column">
          <h1><strong>{{ blogPost_item.title }}</strong></h1>
          <div class="content">
            {{ blogPost_item.description }}
          </div>
          <div class="control p-5">
            <div class="buttons" >
              <a class="button is-primary"  @click="deleteData(blogPost_item.id)" >
                <strong> Kaydı Sil</strong>
              </a>
              <a class="button is-primary" @click="updateItem(blogPost_item)" >
                Güncelle
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="container">
        <div class="card  p-5">
            <div class="field">
                <label class="label">Başlık</label>
                <div class="control">
                    <input v-model="blogPost.title" class="input" type="text" placeholder="Makalenin başlığını giriniz">
                </div>
            </div>
            <div class="field">
                    <label class="label">Metin</label>
                    <div class="control">
                    <textarea v-model="blogPost.description" class="textarea" placeholder="Makalenin içeriğini giriniz"></textarea>
                    </div>
                </div>
                <div class="field is-grouped">
                <div class="control">
                    <button v-if="!updateStatus" @click="saveData" class="button is-link">Ekle</button>
                </div>
                <div class="control">
                    <button  v-if="updateStatus" @click="updateData" class="button is-link">Güncelle</button>
                </div>
                <div class="control">
                    <button v-if="updateStatus" @click="cancelUpdate" class="button is-link">İptal</button>
                </div>
            </div>
      </div>
    </div>
</template>
<script>
 import axios from "axios";
export default {
 
  data() {
    return {
      blogPostList: [],
      blogPost: {
        title: null,
        description: null
      },
      updateID: null,
      updateStatus: false
    };
  },
  methods: {
    saveData() {
      axios.post("http://localhost:3000/blogPost", this.blogPost).then(blogPost_save_response => {
        console.log("blogPost_save_response", blogPost_save_response);
        // Created...
        if (blogPost_save_response.status === 201) {
          this.blogPostList.push(blogPost_save_response.data);
        }
        this.blogPost = {
          title: null,
          description: null
        };
      });
    },
    deleteData(id) {
      axios.delete(`http://localhost:3000/blogPost/${id}`).then(blogPost_delete_response => {
        console.log("blogPost_delete_response", blogPost_delete_response);
        this.blogPostList = this.blogPostList.filter(b => b.id !== id);
      });
    },
    updateData() {
      axios.patch(`http://localhost:3000/blogPost/${this.updateID}`, this.blogPost).then(update_response => {
        const matchedblogPost = this.blogPostList.findIndex(b => b.id === this.updateID);
        if (matchedblogPost > -1) {
          this.blogPostList[matchedblogPost] = {
            ...this.blogPost
          };
          this.updateStatus = false;
          this.updateID = null;
          this.blogPost = {
            title: null,
            description: null
          };
        }
      });
    },
    updateItem(blogPost_item) {
      console.log("blogPost", blogPost_item);
      this.blogPost = {
        title: blogPost_item.title,
        description: blogPost_item.description
      };
      this.updateID = blogPost_item.id;
      this.updateStatus = true;
    },
    cancelUpdate() {
      this.updateStatus = false;
      this.blogPost = {
        title: null,
        description: null,
      };
    }
  },
  created() {
    axios
      .get("http://localhost:3000/blogPost")
      .then(blogPost_response => {
        console.log("blogPost_response ", blogPost_response);
        this.blogPostList = blogPost_response.data;
      })
      .catch(e => {
        console.log("Error", e);
      });
  }
};
</script>
<style>

</style>