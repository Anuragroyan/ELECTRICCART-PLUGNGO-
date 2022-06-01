import { Component, OnInit } from '@angular/core';
import { VideosService} from '../shared/videos.service';
import { NgForm } from '@angular/forms';
import { Videos} from '../shared/videos.model';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideosService]
})
export class VideosComponent implements OnInit {
constructor(public VideosService: VideosService) {}

  ngOnInit() {
    this.resetForm();
    this.refreshVideosList();
  }

    resetForm(form?: NgForm){
      if (form)
        form.reset();
        this.VideosService.selectedVideos = {
          _id: "",
          names: "",
          video: "",
          views: null,
        }
    }
    onSubmit( form: NgForm){
      if ( form.value._id == ""){
       this.VideosService.postVideos(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshVideosList();
       });
      }
       else {
         this.VideosService.putVideos(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshVideosList();
         });
       }
        }
        refreshVideosList() {
          this.VideosService.getVideoList().subscribe((res)=>{
             this.VideosService.videos = res as Videos[];
          });
        }
        onEdit(videos:Videos){
          this.VideosService.selectedVideos = videos;
        }

        onDelete(_id: string,form:NgForm){
          if (confirm('Are you sure to delete this record ?') == true){
            this.VideosService.deleteVideos(_id).subscribe((res) => {
              this.refreshVideosList();
              this.resetForm(form);
            });
          }
        }
}
export class videos {}