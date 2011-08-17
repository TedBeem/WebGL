// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

precision mediump float;

varying vec4 vColor;

void main()
{
   gl_FragColor = vec4(
     abs(vColor.x * 2.0 - 1.0),
     abs(vColor.y * 2.0 - 1.0),
     0,
     1);
}

