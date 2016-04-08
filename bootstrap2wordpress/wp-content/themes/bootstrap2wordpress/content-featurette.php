<?php
  //Video Section
  $video_section_title = get_field("video_section_title");
  $video_section_video = get_field("video_section_video");
?>

<!-- VIDEO FEATURETTE
================================================== -->
<section id="featurette">
<div class="container">
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2">
      <h2><?php echo $video_section_title; ?></h2>
      <?php
        if(!empty($video_section_video)){
          echo $video_section_video;
        }
       ?>
    </div><!-- col -->
  </div><!-- row -->
</div><!-- container -->
</section><!-- video-featurette -->
