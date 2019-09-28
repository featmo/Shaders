#ifdef GL_ES
precision mediump float;
#endif 
//uniforms: similar to built in functions
/**
TODO: write some notes on the process
**/
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

//this function creates noise using a Fract function
//TODO: find out what Fract is and how it operates
float random(vec2 pos) {
    return fract(
        sin((dot(pos.x, pos.x*50000e10))) 
        
    );
}
float hor_lines(vec2 pos, float w_dist, float freq){
     float value =  step(w_dist,sin(pos.y*freq));
     float lines = value;
     return lines;
}
float vert_lines(vec2 pos, float w_dist, float freq){
     float value =  step(w_dist,sin(pos.x*freq));
     float lines = value;
     return lines;
}
float moving_line(vec2 pos, float w_dist){
    float value_01 = step(w_dist, pos.y);
    float value_02 = step(w_dist, 1.0-pos.y);
    float total = value_01*value_02;

    return total;
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution;
    float vert_line = 
    vert_lines(
        pos, 
       sin(random(pos)),
            2.0 
    ); 
    //alot of fun to be had with nested sine functions
    float hor_line = 
    hor_lines(
        pos, 
        sin(
            pos.y*floor(u_time*random(pos*100.0) * 10.0) ), 
        1000.0
    );
    //float moving_line = moving_line(pos, 0.3);

     float total = (hor_line*vert_line);
    vec3 color = 0.5*(vec3(total)*vec3(0.0, 1.0, 0.0));
    gl_FragColor = vec4(color,1.0);
}
    