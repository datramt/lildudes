class Cool {
  constructor(x, y, r) {

    this.pos = createVector(x, y);
    this.r = r;
    this.rot = 0;
    this.angleX = 0;
    this.angleY = 0;
    this.freq = 2;
    this.amp = width/2;
  }

  disp() {

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rot);
    noStroke();
    fill(255, 255, 0);
    ellipse(0, 0, this.r*2);
    fill(0);
    arc(this.r*1/2, this.r*-.30, this.r, this.r, 0, 180);
    arc(this.r*-1/2, this.r*-.30, this.r, this.r, 0, 180);
    stroke(0);
    strokeWeight(0.1*this.r);
    noFill();
    arc(this.r/10, this.r/10, this.r, this.r, 30, 100);
    pop();

  }

  rotateFace(freq, amp) {
    this.angleX = cos(millis()*freq/2.77778)*amp + width/2;
    this.angleY = sin(millis()*freq/2.77778)*amp + height/2;
    this.rot = dist(this.pos.x, this.pos.y, this.angleX, this.angleY);
  }

}
