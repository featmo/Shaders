#ifdef GL_ES
precision mediump float;
#endif 
//uniforms: similar to built in functions
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution;
    float y = pos.x;
    vec3 color = vec3(y);
    gl_FragColor = vec4(color,1.0);
}
    